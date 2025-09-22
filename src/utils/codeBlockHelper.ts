import { useEffect } from "react";

export function copyCodeWithButton() {
    useEffect(() => {
        function onClick(e: MouseEvent) {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const btn = target.closest<HTMLButtonElement>('button.rehype-pretty-copy');
            if (!btn) return;
            if(btn.hasAttribute('data-copied')) return;

            const pre = btn.closest('pre');
            const code = pre?.querySelector('code');
            if (!code) return;

            const codeLines = Array.from(code.querySelectorAll('.data-line, .line, [data-line]'));
            const codeContent = codeLines.map((codeLine) => codeLine.textContent )
            const pasteOutput = codeContent.join("\n")
            // const text = (code.textContent ?? '').replace(/\n$/, '');

            navigator.clipboard.writeText(pasteOutput).then(() => {
                btn.setAttribute('data-copied', 'true');
                setTimeout(() => btn.removeAttribute('data-copied'), 1200);
            }, );
        }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
    }, []);
    };