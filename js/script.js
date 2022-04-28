document.addEventListener("DOMContentLoaded", function () {
  const cake2 = document.getElementById("cake-2");

  const cardTextTwo = document.getElementById("card-text-2");

  let cakeTwoVotes = 0;

  const votes = document.createElement("p");
  votes.innerText = `Votes: ${cakeTwoVotes}`;
  cardTextTwo.appendChild(votes);

  cake2.addEventListener("click", function () {
    cakeTwoVotes++;
    alert("You voted for cake 2");
    votes.innerText = `Votes: ${cakeTwoVotes}`;
    // console.log(cakeTwoVotes);
  });
});
