const apiUrl = "https://api.sampleapis.com/typer/webLessons"

async function fetchTutorials() {
 try {
  const response = await fetch(apiUrl)
  const tutorials = await response.json() 
  displayTutorials(tutorials)
 } catch (error) {
  console.error("Error fetching tutorials:", error)
 }
}

function displayTutorials(tutorials) {
 const tutorialContainer = document.getElementById("tutorial-container")

 tutorials.forEach((tutorial) => {
  const tutorialBox = document.createElement("div")
  tutorialBox.className = "tutorial-box"

  const tutorialTitle = document.createElement("h2")
  tutorialTitle.textContent = tutorial.title
  tutorialTitle.style.marginTop = "30px"
  tutorialTitle.style.marginBottom = "20px"

  tutorialBox.appendChild(tutorialTitle)

  tutorial.steps.forEach((step) => {
   const stepDesc = document.createElement("p")
   stepDesc.textContent = step.desc

   const codeBlock = document.createElement("pre")
   const codeContent = document.createElement("code")
   codeContent.textContent = step.action.join("\n") 

   codeBlock.appendChild(codeContent)

   const resultBox = document.createElement("div")
   resultBox.className = "result-box"
   resultBox.innerHTML = step.action.join("\n") 
   tutorialBox.appendChild(stepDesc)
   tutorialBox.appendChild(codeBlock)
   tutorialBox.appendChild(resultBox)
  })

  tutorialContainer.appendChild(tutorialBox)
 })
}

fetchTutorials()
