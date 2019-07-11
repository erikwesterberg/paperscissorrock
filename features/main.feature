Feature: Playing Game
  As a user
  In order to use the application
  I would like to be able to play Rock Paper Scissor

Background: 
  Given I visit the site
  Then I should see "Rock Paper Scissors"
  And I should see "CHOOSE WISE"
  
Scenario: Computer chooses Rock and I choose Rock
  When I click "rock" button
  And the computer chooses "rock"
  Then I should see "Computer chose"

Scenario: Computer chooses Paper and I choose Rock
  When I click "rock" button
  And the computer chooses "paper"
  Then I should see "Computer chose"

Scenario: Computer chooses Scissors and I choose Rock
  When I click "rock" button
  And the computer chooses "scissors"
  Then I should see "Computer chose"


  