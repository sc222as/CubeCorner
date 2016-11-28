using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace NumberGuessingGame.Models.ViewModels
{
    public class ViewModel
    {   //krav 2. Klientvalidering
        [Required(ErrorMessage = "This field can not be empty.")]
        [Range(1, 100, ErrorMessage = "Your guessed number have to be between 1 (one) and 100 (one hundred)")]


        public int? Guess { get; set; }
        
        public SecretNumber SecretNumber { get; set; }          
        public string result    // Krav 3 och krav 4 Här Förbereds resultatet av gissningen och returneras i strängen result                                                    
        {                       //Presentationsdelen av Krav 9 också
            
            get
            {
               string result = string.Empty;
                if (SecretNumber.LastGuessedNumber.Outcome == Outcome.Low)
                {
                    result = string.Format ("{0} is low", Guess);
                }
                if (SecretNumber.LastGuessedNumber.Outcome == Outcome.High)
                {
                    result = string.Format("{0} is high", Guess);
                }
                if (SecretNumber.LastGuessedNumber.Outcome == Outcome.Right)
                {
                    result = string.Format("You guessed the secret number after {0} guesses. Press restart to try again!", SecretNumber.Count+1);
                }
                if (SecretNumber.LastGuessedNumber.Outcome == Outcome.NoMoreGuesses)                    
                {
                    result = string.Format("You don't have any more guesses. The correct number was {0}", SecretNumber.Number);
                }
                if (SecretNumber.LastGuessedNumber.Outcome == Outcome.OldGuess)
                {
                    result = string.Format("You have already guessed the number {0}.", Guess);
                }
                return result;             
            }
        }
       
              
        public string HeaderText
        {
            get
            {
                if (SecretNumber.CanMakeGuess != true && SecretNumber.LastGuessedNumber.Outcome != Outcome.Right)
                {
                    return "You Loose!";
                }
                else if (SecretNumber.LastGuessedNumber.Outcome == Outcome.Right)
                {
                    return "You Win!";
                }
                else
                {
                    if (SecretNumber.Count == 0)
                    {
                        return "First Guess";
                    }
                    if (SecretNumber.Count == 1)
                    {
                        return "Second Guess";
                    }
                    if (SecretNumber.Count == 2)
                    {
                        return "Third Guess";
                    }
                    if (SecretNumber.Count == 3)
                    {
                        return "Fourth Guess";
                    }
                    if (SecretNumber.Count == 4)
                    {
                        return "Fifth Guess";
                    }
                    if (SecretNumber.Count == 5)
                    {
                        return "Sixth Guess";
                    }
                    if (SecretNumber.Count == 6)
                    {
                        return "Seventh Guess";
                    }
                    else
                    {
                        return "";
                    }
                }

            }
        }       
    }



}