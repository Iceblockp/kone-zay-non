"use client"

import { useRef, useEffect, useState } from "react"
import { BrowserMultiFormatReader, DecodeHintType, BarcodeFormat } from "@zxing/library"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Camera } from "lucide-react"

interface BarcodeScannerProps {
  onDetected: (result: string) => void
  onClose: () => void
}

export default function BarcodeScanner({ onDetected, onClose }: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const codeReader = useRef<BrowserMultiFormatReader | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!videoRef.current) return

    codeReader.current = new BrowserMultiFormatReader(undefined, {
      hints: new Map<DecodeHintType, any>([
        [DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.QR_CODE]],
      ]),
    })

    setIsScanning(true)
    setError(null)

    // ZXing will handle requesting the camera and attaching the stream
    codeReader.current
      .decodeFromVideoDevice(null, videoRef.current, (result, err, controls) => {
        if (result) {
          onDetected(result.getText())
          controls.stop() // stop the camera
          setIsScanning(false)
        }
        // ignore NotFoundException noise
      })
      .catch((err) => {
        console.error(err)
        setError("ကင်မရာကို ဝင်ရောက်၍ မရပါ– ခွင့်ပြုချက်ကို စစ်ဆေးပါ။")
        setIsScanning(false)
      })

    return () => {
      codeReader.current?.reset() // clean-up on unmount
    }
  }, [onDetected])

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">ဘားကုဒ် စကင်န်ဖတ်နေသည်</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
            {error ? (
              <div className="text-center text-red-600 p-4">
                <p>{error}</p>
                <p className="text-sm text-gray-500 mt-2">ဘရောက်ဆာ ဆက်တင်များတွင် ကင်မရာ ခွင့်ပြုချက်ကို စစ်ဆေးပါ။</p>
              </div>
            ) : (
              <>
                <video ref={videoRef} className="w-full h-full object-cover" playsInline />
                {!isScanning && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
                    <Camera className="h-16 w-16 mb-4" />
                    <p className="text-lg">စကင်န်ဖတ်ရန် အသင့်ဖြစ်ပါပြီ</p>
                  </div>
                )}
                {isScanning && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
                    <div className="animate-pulse rounded-full h-20 w-20 border-4 border-primary-400 flex items-center justify-center">
                      <Camera className="h-10 w-10" />
                    </div>
                    <p className="mt-4 text-lg">စကင်န်ဖတ်နေသည်...</p>
                    <p className="text-sm text-gray-300">ကင်မရာကို ဘားကုဒ်ပေါ် ထားပါ</p>
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Dummy NotFoundException for local development, replace with actual import if available
class NotFoundException extends Error {
  constructor(message?: string) {
    super(message)
    this.name = "NotFoundException"
  }
}
