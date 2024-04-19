document.addEventListener("DOMContentLoaded", function() {
  // sidenav initialization
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // Modal delete category initialization
  let delete_category = document.querySelectorAll('.modal');
  M.Modal.init(delete_category);


  // datepicker initialization
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });

  // select initialization
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // collapsible initialization
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
  
});