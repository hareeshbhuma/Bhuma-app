QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST calculatebmi', assert => {
  assert.equal(calculatebmi(1, 2), 2500, 2500)
  assert.equal(calculatebmi(2, 1), 20000, 'Negative integers')
  assert.equal(calculatebmi(3, 1), 30000, 'positive integers')
  assert.equal(calculatebmi(3,2),7500,7500)
  assert.equal(calculatebmi(1,1),10000,10000)
})
function calculatebmi(weight,height) {
    return weight/(height/100*height/100)
}

QUnit.config.autostart = false  // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstnumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

