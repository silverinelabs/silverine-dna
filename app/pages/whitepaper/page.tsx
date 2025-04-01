"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function page() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Whitepaper</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore the in-depth research and technological advancements behind
          our project. Download the full whitepaper below.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <Download size={20} /> Download Whitepaper
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl w-full">
        {["Introduction", "Technology", "Use Cases", "Roadmap"].map(
          (section, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg transition-transform transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">{section}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A brief overview of the {section.toLowerCase()} section.
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
