import { useState, useCallback } from "react";

export function useToClipboard(): [string | null, (value: string) => void] {
  const [state, setState] = useState<string | null>(null);

  const fn = useCallback(async (value: string): Promise<void> => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        setState(value);
      } else {
        //
      }
    } catch {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = value;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);

      setState(value);
    }
  }, []);

  return [state, fn];
}
