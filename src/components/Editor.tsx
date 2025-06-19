// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { initialContent } from './InitialContent';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight';
import js from 'highlight.js/lib/languages/javascript';
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxAlignTop,
  RxListBullet,
} from 'react-icons/rx';

import 'highlight.js/styles/an-old-hope.css';
import BubbleButton from './BubbleButton';
import FloatingButton from './FloatingButton';
// define your extension array

const lowlight = createLowlight(all);
lowlight.register('js', js);

function EditorComponent() {
  const editor = useEditor({
    extensions: [
      CodeBlockLowlight.configure({
        lowlight,
      }),
      StarterKit,
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none break-words whitespace-pre-wrap',
      },
    },
  });
  return (
    <>
      <EditorContent
        className=" sm:max-w-[800px] max-w-[280px] mx-auto pt-16 prose prose-sky"
        editor={editor}
      />

      <FloatingMenu
        editor={editor}
        shouldShow={(props) => {
          const { $from } = props.state.selection;
          const currentLineText = $from.nodeBefore?.textContent;

          return currentLineText === '/';
        }}
        className="bg-zinc-600 shadow-xl border border-zinc-400 text-white shadow-black/20 rounded-lg overflow-hidden flex flex-col divide-x divide-zinc-100 min-w-[200px]"
      >
        <span className="text-xs text-start p-2 text-zinc-300">Comandos Básicos</span>
        <FloatingButton
          onClick={() => editor!.chain().focus().setParagraph().run()}
          data-active={editor!.isActive('paragraph')}
        >
          <div className="flex items-start gap-2">
            <RxAlignTop className="w-4 h-4" />
            <div className="flex flex-col text-start">
              <span>Texto</span>
              <span className="text-xs">Apenas comece escrevendo com texto simples</span>
            </div>
          </div>
        </FloatingButton>
        <FloatingButton
          onClick={() => editor!.chain().focus().toggleHeading({ level: 1 }).run()}
          data-active={editor!.isActive('heading', { level: 1 })}
        >
          <div className="flex items-start gap-2">
            <span>
              H<sub>1</sub>
            </span>
            <div className="flex flex-col text-start">
              <span>Título 1</span>
              <span className="text-xs">Comece escrevendo com Título 1</span>
            </div>
          </div>
        </FloatingButton>
        <FloatingButton
          onClick={() => editor!.chain().focus().toggleHeading({ level: 2 }).run()}
          data-active={editor!.isActive('heading', { level: 2 })}
        >
          <div className="flex items-start gap-2">
            <span>
              H<sub>2</sub>
            </span>
            <div className="flex flex-col text-start">
              <span>Título 2</span>
              <span className="text-xs">Comece escrevendo com Título 2</span>
            </div>
          </div>
        </FloatingButton>
        <FloatingButton
          onClick={() => editor!.chain().focus().toggleHeading({ level: 3 }).run()}
          data-active={editor!.isActive('heading', { level: 3 })}
        >
          <div className="flex items-start gap-2">
            <span>
              H<sub>3</sub>
            </span>
            <div className="flex flex-col text-start">
              <span>Título 3</span>
              <span className="text-xs">Comece escrevendo com Título 3</span>
            </div>
          </div>
        </FloatingButton>
        <FloatingButton
          onClick={() => editor!.chain().focus().toggleBulletList().run()}
          data-active={editor!.isActive('bulletList')}
        >
          <div className="flex items-start gap-2">
            <RxListBullet />
            <div className="flex flex-col text-start">
              <span>Lista não ordenada</span>
              <span className="text-xs">Comece com uma lista não ordenada</span>
            </div>
          </div>
        </FloatingButton>
      </FloatingMenu>
      <BubbleMenu
        className="bg-zinc-600 shadow-xl border border-zinc-400 text-white shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-100"
        editor={editor}
      >
        <div className="flex items-center divide-x divide-zinc-100">
          <BubbleButton
            onClick={() => editor!.chain().focus().toggleBold().run()}
            data-active={editor!.isActive('bold')}
          >
            <RxFontBold className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor!.chain().focus().toggleItalic().run()}
            data-active={editor!.isActive('italic')}
          >
            <RxFontItalic className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor!.chain().focus().toggleStrike().run()}
            data-active={editor!.isActive('strike')}
          >
            <RxStrikethrough className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor!.chain().focus().toggleCode().run()}
            data-active={editor!.isActive('code')}
          >
            <RxCode className="w-4 h-4" />
          </BubbleButton>
        </div>
      </BubbleMenu>
    </>
  );
}
export default EditorComponent;
