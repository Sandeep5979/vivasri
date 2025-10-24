import useSelect2 from "../../hooks/useSelect2";


export default function RelationSelect() {

useSelect2(".inline-multiselect3", {
    placeholder: "Create",
    closeOnSelect: false,
  });

  return (
    <div className="hormformrow">
      <select className="form-select">
        <option>Self</option>
        <option>Son</option>
        <option>Daughter</option>
        <option>Brother</option>
        <option>Sister</option>
        <option>Relative/Friend</option>
      </select>
    </div>
  );
}
