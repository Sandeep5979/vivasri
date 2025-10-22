import useSelect2 from "../../hooks/useSelect2";

export default function Cast() {
  useSelect2(".inline-multiselect4", {
    placeholder: "Select",
    closeOnSelect: false
  });

  return (
    <select
      className="inline-multiselect inline-multiselect4"
      multiple="multiple"
    >
      <option value="">--Select--</option>
      <option value="Brahmin">Brahmin</option>
    </select>
  );
}
