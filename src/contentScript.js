const getNewTerm = term =>
  term[2] === '2'
    ? `${Number(term[0]) + 1}-${Number(term[1]) + 1}-1`
    : `${term[0]}-${term[1]}-2`

const sel = document.getElementById('felev')
const old_term = sel?.getElementsByTagName('option')[0]?.value?.split('-')

if (old_term && old_term.length === 3) {
  const new_term = getNewTerm(old_term)
  sel.innerHTML = `<option value="${new_term}">${new_term}</option>\n${sel.innerHTML}`
}
