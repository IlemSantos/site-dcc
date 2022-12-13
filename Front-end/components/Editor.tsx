import React, { useMemo, useState } from 'react';
import { BaseEditor, createEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Input, Spacer } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

interface EditorProps {
  buttonLabel: string;
  initialValue: Descendant[];
  onsubmit: (data: any) => Promise<void>;
};

export function Editor({ buttonLabel, initialValue, onsubmit }: EditorProps) {
  const { handleSubmit, register } = useForm()
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const [editorState, setEditorState] = useState<Descendant[]>(initialValue)

  const onSubmit = async (data: any) => {
    await onsubmit({
      ...data,
      content: editorState,
    });
  }

  const onChange = (evt: any) => setEditorState(evt);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme="blue" px={6} borderRadius={6} type="submit">{buttonLabel}</Button>
        </ButtonGroup>
      </Flex>

      <FormControl mb={2}>
        <FormLabel htmlFor="title">Título</FormLabel>
        <Input {...register('title', {
          required: 'This is required',
        })} id="title" name="title" type="text" />
      </FormControl>

      <FormControl mb={2}>
        <FormLabel htmlFor="slug">Slug</FormLabel>
        <Input {...register('slug', {
          required: 'This is required',
        })} id="slug" name="slug" type="text" />
      </FormControl>

      <Box height='md' p={4} bg='white' border='2px' borderColor='gray.200' borderRadius={6}>
        <Slate
          editor={editor}
          value={initialValue}
          onChange={onChange}
        >
          <Editable />
        </Slate>
      </Box>
    </form>
  )
}

export default Editor