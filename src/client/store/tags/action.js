export function tagsAddToggle() {
  return {
    type: 'TAGS_ADD_TOGGLE'
  }
}

export function tagsAddClose() {
  return {
    type: 'TAGS_ADD_CLOSE'
  }
}

export function tagsThemeToggle() {
  return {
    type: 'TAGS_THEME_TOGGLE'
  }
}

export function tagsThemeClose() {
  return {
    type: 'TAGS_THEME_CLOSE'
  }
}

export function endListTags(tags) {
  return {
    type: 'END_LIST_TODOS',
    tags
  }
}

export function setInput(input) {
  return {
    type: 'SET_INPUT',
    input
  }
}