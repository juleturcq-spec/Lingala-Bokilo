const KEY = "lingala_bokilo_state";

export function loadState(){
  try{
    return JSON.parse(localStorage.getItem(KEY)) || {};
  }catch{
    return {};
  }
}

export function saveState(state){
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function ensureDefaults(state){
  state.settings ??= {
    styleFilter: "all"
  };

  state.srs ??= {};
  state.favs ??= {};

  return state;
}
