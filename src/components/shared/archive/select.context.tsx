import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from '../../primitives/select';

export function SelectContext() {
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center'>
      <Select>
        <SelectTrigger className='w-[200px]'>
          <SelectValue placeholder='Select a primitive.' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Primitives</SelectLabel>
            <SelectItem value='accordion'>Accordion</SelectItem>
            <SelectItem value='alert'>Alert</SelectItem>
            <SelectItem value='button'>Button</SelectItem>
            <SelectItem value='chip'>Chip</SelectItem>
            <SelectItem value='canvas'>Canvas</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
