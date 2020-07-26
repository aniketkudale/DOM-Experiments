function showSubmenu() {
  const submenu = document.getElementsByClassName("menu__sub")[0];
  submenu.style.display = "block";
}

function hideSubmenu() {
  const submenu = document.getElementsByClassName("menu__sub")[0];
  submenu.style.display = "none";
}

let active = null;

function onMenuItemMouseEnter(item) {
  if (active) {
    active.classList.remove("menu__main__item--active");
  }
  active = item;
  item.classList.add("menu__main__item--active");
  showSubmenu();
}

const menuItems = document.getElementsByClassName("menu__main__item");
for (const menuItem of menuItems) {
  menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem)
}

const menu = document.getElementsByClassName("menu")[0];
menu.onmouseleave = hideSubmenu;