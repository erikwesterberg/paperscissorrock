Feature: Playing Game
  As a user
  In order to use the application
  I would like to be able to play Rock Paper Scissor

Background: 
  Given I visit the site
  Then I should see "Rock Paper Scissors"
  And I should see "CHOOSE WISE"

Scenario: Computer chooses Rock and I choose Rock
  When I click "Rock" button
  And the computer chooses "rock"
  Then I should see "Its A Draw"
  And I Click "Rock" button
  Then I should see "Rock Paper Scissors"
  And I should see "CHOOSE WISE"
