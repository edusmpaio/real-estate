import { Listbox } from '@headlessui/react';
import { CaretDown, TagSimple } from '@phosphor-icons/react';

interface SelectOptionProps {
  placeholder: string;
}

export function SelectOptions({ placeholder }: SelectOptionProps) {
  return (
    <Listbox>
      <div className="relative">
        <Listbox.Button className="w-[180px] flex justify-between items-center bg-gray-100 py-3 pl-4 pr-2 h-fit border border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <TagSimple size={20} />
            {placeholder}
          </div>
          <CaretDown />
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 w-full bg-gray-100 border border-gray-200 shadow-md">
          <Listbox.Option value="a">Hello World</Listbox.Option>
          <Listbox.Option value="a">Hello World</Listbox.Option>
          <Listbox.Option value="a">Hello World</Listbox.Option>
          <Listbox.Option value="a">Hello World</Listbox.Option>
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
