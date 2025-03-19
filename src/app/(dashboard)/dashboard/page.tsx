"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Captions,
  Clapperboard,
  MicVocal,
  Palette,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto h-full flex justify-center items-center">
      <div className="w-full max-w-2xl rounded-xl flex flex-col gap-4 justify-center p-3 shadow-xl">
        <h1 className="text-center text-3xl text-balance">
          💡 Think. 🎬 Generate. 🌍 Share.
        </h1>

        <form className="bg-blue-950/10 min-h-10 border rounded-xl p-3 flex flex-col gap-3">
          <textarea
            minLength={10}
            className="bg-inherit w-full h-24 focus:outline-none rounded-xl p-2 resize-none"
            placeholder="Create a video on 3 life lessons by Bhagat Singh."
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === "Enter") {
                console.log("Form submitted");
              }
            }}
          />
          <div className="flex justify-between">
            <div className="flex gap-1">
              {/* Palette Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors p-2">
                    <Palette width={25} />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Choose Style of Images</DialogTitle>
                  </DialogHeader>
                  <p>Select the style you want for your generated images.</p>
                </DialogContent>
              </Dialog>

              {/* Video Template Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors p-2">
                    <Clapperboard />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Select Video Template</DialogTitle>
                  </DialogHeader>
                  <p>Pick a template that fits your content.</p>
                </DialogContent>
              </Dialog>

              {/* Voice Over Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors p-2">
                    <MicVocal />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Choose a Voice Over</DialogTitle>
                  </DialogHeader>
                  <p>Pick a voice style for narration.</p>
                </DialogContent>
              </Dialog>

              {/* Captions Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors p-2">
                    <Captions />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Customize Captions</DialogTitle>
                  </DialogHeader>
                  <p>Enable captions and adjust their settings.</p>
                </DialogContent>
              </Dialog>
            </div>

            <Button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md active:scale-95 transition-all"
            >
              <Sparkles size={18} />
              Generate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
