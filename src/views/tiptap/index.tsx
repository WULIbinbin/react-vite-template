import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

export default function Index() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
    onUpdate({ editor }) {
      const json = editor.getJSON();
      console.log(json);
    },
  });

  useEffect(() => {
    console.log(editor);
  }, [editor]);

  return (
    <div className='editor'>
      <EditorContent editor={editor} />
    </div>
  );
}
