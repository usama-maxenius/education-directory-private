import { useEffect, useState, useRef } from 'react';

export default function useToggleOption(initialIsVisible: boolean) {
    const [showOptions, setShowOptions] = useState(initialIsVisible);
    const ref = useRef(null);
  
    const handleHideDropdown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowOptions(false);
      }
    };
  
    const handleClickOutside = (event: any) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('keydown', handleHideDropdown, true);
      document.addEventListener('click', handleClickOutside, true);
  
      return () => {
        document.removeEventListener('keydown', handleHideDropdown, true);
        document.removeEventListener('click', handleClickOutside, true);
      };
    });
  
    return { ref, showOptions, setShowOptions };
}