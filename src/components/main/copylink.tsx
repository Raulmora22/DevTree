import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";
import React from "react";
import { ClipboardCheck } from "lucide-react";
import { DevTreeConfig } from "@/config";
import { motion, AnimatePresence } from "framer-motion";

const copyUrlToClipboard = () => {
  navigator.clipboard.writeText(window.location.href);
};

export function Copylink() {
  const [copy, setCopy] = React.useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          copyUrlToClipboard();
          setCopy(true);
          setTimeout(() => setCopy(false), 1000);
        }}
        variant={"outline"}
        size={"icon"}
        className={`cursor-pointer ${DevTreeConfig.RoundedOptions}`}
      >
        <Link />
      </Button>

      <AnimatePresence>
        {copy && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-2rem)] z-50"
          >
            <Alert
              variant="default"
              className={`${DevTreeConfig.RoundedOptions} border-2 border-green-600 bg-green-400 text-black dark:border-green-700 dark:bg-green-400 dark:text-black py-3`}
            >
              <ClipboardCheck className="inline-block mr-2" />
              <AlertTitle>Link copied to clipboard</AlertTitle>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
