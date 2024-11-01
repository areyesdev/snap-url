import { CopyIcon, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function UrlList() {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-2">URL'S Generadas</h2>
        <ul className="space-y-2">
            <li className="flex items-center gap-2 justify-between">
                <Link href="#" className="text-black hover:underline" legacyBehavior target="_blank">
                    https://www.example.com
                </Link>
                <div className="flex items-center gap-2">
                    <Button variant='ghost' size='icon' className="text-muted-foreground hover:bg-muted">
                        <CopyIcon className="w-4 h-4" />
                        <span className="sr-only">Copiar</span>
                    </Button>
                    <span className="flex items-center gap-2">
                        <EyeIcon className="w-4 h-4" />
                        100 views
                    </span>
                </div>
            </li>
        </ul>
    </div>
  )
}
