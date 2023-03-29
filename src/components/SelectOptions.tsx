import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react';

interface SelectOptionProps {
  field: {
    id: string;
    icon: JSX.Element;
    placeholder: string;
    options: string[];
  };
}

export function SelectOptions({ field }: SelectOptionProps) {
  const { icon, placeholder, options } = field;

  const [selectedOption, setSelectedOption] = useState(placeholder);

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="min-w-[186px] w-fit flex justify-between items-center bg-gray-100 py-3 pl-4 pr-2 h-fit border border-gray-200">
            <div className={`flex items-center gap-3 text-sm text-gray-800`}>
              {icon}
              <span
                className={`${
                  selectedOption === placeholder
                    ? 'text-gray-600'
                    : 'text-gray-800'
                }`}
              >
                {selectedOption}
              </span>
            </div>
            <CaretDown />
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-2 w-full bg-white border border-gray-200 shadow-md">
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className="text-sm py-3 px-4 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
