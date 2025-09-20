import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
function AccessDenined() {
  return (
       <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-4">
        <Card className="bg-slate-800/50 border-slate-700 max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-white text-center">ACCESS DENIED</CardTitle>
            <CardDescription className="text-slate-400 text-center">
              You do not have permission to view this page.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <AlertTriangle className="mx-auto mb-4 text-red-500" />
          </CardContent>
        </Card>
      </div>
  )
}

export default AccessDenined