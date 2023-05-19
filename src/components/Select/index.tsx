import { useEffect, useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import useToggleOption from '@/hooks/useToggle';
import styles from './index.module.css';

interface IProps {
  onSelect: (selected: string) => void;
  result_identifier?: (id: SubmitIndentifiers) => void;
  placeholder: string;
  schoolid?: string;
  options: OptionType[];
  container?: boolean;
  selected?: boolean;
  selectedOptions?: {
    readonly title: string;
  };
  icon?: StaticImageData;
}

const Select: React.FC<IProps> = ({
  result_identifier,
  onSelect,
  placeholder,
  options,
  container,
  selectedOptions,
  selected = false,
  icon,
  schoolid,
}): JSX.Element => {
  const {
    select,
    active,
    select_input,
    select_options,
    select_input_containerize,
    icon_wrapper,
    select_input_with_icon,
    select_disabled,
    lists,
    working,
  } = styles;
  const { ref, showOptions, setShowOptions } = useToggleOption(false);
  const [selectedOption, setSelectedOption] = useState(
    selectedOptions?.title ? selectedOptions.title : (placeholder as string)
  );

  const toggleOptions = () => !selected && setShowOptions((po) => !po);

  useEffect(()=> {
    selectedOptions?.title && setSelectedOption(selectedOptions?.title);
  }, [selectedOptions?.title]);

  return (
    <div className={`${select} ${showOptions && active} select`} ref={ref}>
      {icon && (
        <div className={icon_wrapper}>
          <Image
            src={icon}
            loading='lazy'
            width='0'
            height='0'
            sizes='100%'
            className={styles.imgIconClass}
            alt={placeholder}
          />
        </div>
      )}
      <input
        type='text'
        className={`${
          container ? select_input_containerize : select_input
        } ${icon && select_input_with_icon} ${
          selected && select_disabled
        } ${working}`}
        readOnly
        value={selectedOption}
        placeholder={selectedOption || placeholder}
        onClick={()=> toggleOptions()}
        
      />
      {showOptions && <div className={select_options}>
        {/* <div
          className='text-base'
          data-value={placeholder}
          onClick={() => {
            onSelect('');
            setSelectedOption('');
            toggleOptions();
          }}
        >
          {placeholder}
        </div> */}

        {options.map((item, idx) => {
          if (item.value || item.OptionLabel) {
            return (
              <div
                className='text-base'
                key={`opt-${item.value ?? item.QuestionValue}-${idx}`}
                data-value={item.value ?? item.QuestionValue}
                data-title={item.title ?? item.OptionLabel}
                onClick={(e: any) => {
                  onSelect(e.target.attributes['data-value'].value);
                  setSelectedOption(
                    e.target.attributes['data-title'].value
                  );

                  toggleOptions();
                  if (item.QuestionValue && item.OptionLabel) {
                    const obj: SubmitIndentifiers = {
                      result_identifier:
                        item.result_identifier as string,
                      result_set_identifier:
                        item.result_set_identifier as string,
                      schoolid: schoolid,
                    };
                    if (result_identifier) result_identifier(obj);
                  }
                }}
              >
                {item.title ?? item?.OptionLabel}
              </div>
            );
          }
        })}
      </div>}
    </div>
  );
};

// function useToggleOption(initialIsVisible: boolean) {
//   const [showOptions, setShowOptions] = useState(initialIsVisible);
//   const ref = useRef(null);

//   const handleHideDropdown = (event: KeyboardEvent) => {
//     if (event.key === 'Escape') {
//       setShowOptions(false);
//     }
//   };

//   const handleClickOutside = (event: any) => {
//     //@ts-ignore
//     if (ref.current && !ref.current.contains(event.target)) {
//       setShowOptions(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleHideDropdown, true);
//     document.addEventListener('click', handleClickOutside, true);

//     return () => {
//       document.removeEventListener('keydown', handleHideDropdown, true);
//       document.removeEventListener('click', handleClickOutside, true);
//     };
//   });

//   return { ref, showOptions, setShowOptions };
// }

export default Select;
