"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BatteryCalculator() {
  const [voltage, setVoltage] = useState("")
  const [capacity, setCapacity] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateWh = () => {
    const v = Number.parseFloat(voltage)
    const c = Number.parseFloat(capacity)
    if (isNaN(v) || isNaN(c)) {
      alert("有効な数値を入力してください。")
      return
    }
    const wh = (v * c) / 1000
    setResult(Number.parseFloat(wh.toFixed(2)))
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>モバイルバッテリー Wh計算機</CardTitle>
          <CardDescription>バッテリーの電圧とmAh容量からWhを計算します。</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              calculateWh()
            }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="voltage">電圧 (V)</Label>
              <Input
                id="voltage"
                type="number"
                placeholder="例: 3.7"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="capacity">バッテリー容量 (mAh)</Label>
              <Input
                id="capacity"
                type="number"
                placeholder="例: 10000"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              計算
            </Button>
          </form>
          {result !== null && (
            <div className="mt-4 p-4 bg-secondary rounded-md">
              <p className="text-center">
                計算結果: <strong>{result} Wh</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="text-center"><a href="https://beacons.ai/byeolsatang" target="_blank" rel="noopener noreferrer">
      Created by Kira.
      </a></p>
    </div>
  )
}

