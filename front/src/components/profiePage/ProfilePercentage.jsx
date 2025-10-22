import useSelect2 from "../../hooks/useSelect2";

export default function ProfilePercentage() {
  useSelect2(".inline-multiselect4", {
    placeholder: "Select",
    closeOnSelect: false
  });

  return (
    <select
      className="inline-multiselect inline-multiselect4"
      multiple="multiple"
    >
      <option value="">All</option>
      <option value="50-80">50-80 %</option>
      <option value="80-100">80-100 %</option>
    </select>
  );
}
