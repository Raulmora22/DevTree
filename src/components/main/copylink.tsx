import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";
import React from "react";
import { ClipboardCheck } from "lucide-react";

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
          setTimeout(() => setCopy(false), 2000);
        }}
        variant={"outline"}
        size={"icon"}
        className="cursor-pointer"
      >
        <Link />
      </Button>
      {copy && (
        <Alert
          variant="destructive"
          className="rounded-md border-2 border-green-600 bg-green-400 text-black dark:border-green-700 dark:bg-green-400 dark:text-black fixed bottom-4 left-1/2 transform -translate-x-1/2 py-3 w-full max-w-[calc(100%-2rem)] z-50"
        >
          <ClipboardCheck />
          <AlertTitle> Link copy to clipboard </AlertTitle>
        </Alert>
      )}
    </div>
  );
}
