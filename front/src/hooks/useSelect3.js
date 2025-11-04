// hooks/useSelect3.js
import { useEffect } from "react";
import $ from "jquery";
import "select2";

export default function useSelect3(selector, options = {}, onChange) {
  useEffect(() => {
    const $el = $(selector);

    if (!$el.length) return;

    // Initialize select2
    $el.select2(options);

    // Bind change handler
    $el.on("change", function (e) {
      const val = $(this).val();
      onChange && onChange(val);
    });

    // Cleanup on unmount
    return () => {
      $el.off("change");
      $el.select2("destroy");
    };
  }, [selector]); // run only once
}
