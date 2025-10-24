import { useEffect } from "react";
import $ from "jquery";
import "select2";

export default function useSelect2(selector, options = {}, onChange) {
  useEffect(() => {
    const $el = $(selector);

    const mergedOptions = {
     minimumResultsForSearch: Infinity, // hides the search box
      ...options,
    };

    if ($el.length && !$el.hasClass("select2-hidden-accessible")) {
      $el.select2(mergedOptions);
    }

    if ($el.length && onChange) {
      $el.on("change", (e) => {
        const values = $el.val();
        onChange(values || []);
      });
    }

    return () => {
      if ($el.length) {
        if (onChange) {
          $el.off("change"); // clean event
        }
        if ($el.hasClass("select2-hidden-accessible")) {
          try {
            $el.select2("destroy");
          } catch (e) {
            console.warn("Select2 destroy skipped:", e.message);
          }
        }
      }
    };
  }, [selector, options, onChange]);
}



/* import { useEffect } from "react";
import $ from "jquery";
import "select2";

export default function useSelect2(selector, options = {}) {
  useEffect(() => {
    const $el = $(selector);

    if ($el.length && !$el.hasClass("select2-hidden-accessible")) {
      $el.select2(options);
    }

    return () => {
      if ($el.length && $el.hasClass("select2-hidden-accessible")) {
        try {
          $el.select2("destroy");
        } catch (e) {
          console.warn("Select2 destroy skipped:", e.message);
        }
      }
    };
  }, [selector, options]);
}
*/