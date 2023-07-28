// Hooks
import { SavedFolderIcon } from "@/shared/icons";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Functions
import { getAverageRGB, toDataURL } from "./utils";

export interface IPlaylists {
  [key: string]: {
    title: string
    imageUrl?: string
    Icon?: React.FC<React.SVGAttributes<SVGSVGElement>>
    count: number
  }
}

export function usePlaylist(playlists: IPlaylists) {
  const ref = useRef<HTMLDivElement | null>(null)
  const query = Object.fromEntries(new URLSearchParams(
    useLocation().search
  ).entries()) as { id: string }
  const playlist = playlists[query.id]

  useEffect(() => {
    if (!playlist?.imageUrl || !ref.current) {
      if (ref.current) {
        ref.current.style.setProperty(
          `--avgColor`, `80 80 80`
        )
      }
    } else {
      toDataURL(playlist?.imageUrl)
        .then(base64 => {
          const image = new Image()
          image.src = String(base64)
    
          image.onload = () => {
            const rgb = getAverageRGB(image)
  
            if (ref.current) {
              ref.current.style.setProperty(
                `--avgColor`, `${rgb.r} ${rgb.g} ${rgb.b}`
              )
            }
          }
        })
    }
  }, [query?.id, ref])

  return { playlist, ref }
}