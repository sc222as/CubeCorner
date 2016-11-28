using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NumberGuessingGame.Models
{
    public class SecretNumber
    {

        private List<GuessedNumber> _guessedNumbers;
        private GuessedNumber _lastGuessedNumber;
        private int? _number;
        public const int MaxNumberOfGuesses = 7;// krav 1
        
        // Returnerar True eller false beroende på vad Counten (antalet gissningar) är.
        // Returnerar även False om man har gissar rätt.
        public bool CanMakeGuess
        {
            get
            {
                if (Count < MaxNumberOfGuesses && _lastGuessedNumber.Outcome != Outcome.Right)
                {
                    return true;
                }
                else return false;
                                                                                                    
            }                                                                                       
        }


        //Tar ANTALET nummer i _guessednumbers och returnerar det värdet
        public int Count//krav 1 och krav 5                               
        {
            get
            {               
                return _guessedNumbers.Count;               
                
            }
        }

        //Returnerar en lista på gissade siffror. Har använt metoden AsReadOnly() som löser alla(?) privacy leaks problem.
        public IReadOnlyList<GuessedNumber> GuessedNumbers
        {
            get
            {
                return _guessedNumbers.AsReadOnly();        
            }
        }
        //Krav 11 Returnerar senaste gissade talet.
        public GuessedNumber LastGuessedNumber
        {
            get
            {
                return _lastGuessedNumber;                  

            }

        }

        //Det hemliga Numret
        public int? Number {



            get
            {
                return CanMakeGuess ? null : _number;    //Krav 8, 12 och 13. Så länge du kan gissa så får du inte det hemliga numret.       
            }




            private set
            {
                _number = value;
            }


        }
        //Rensar _guessedNumbers listan, Initierar Random, Tilldelar _number ett värde mellan 1 och 100 (Krav 8) samt ser till att Outcome sätts till Outcome.Indefinite
        public void Initialize()
        {
            _guessedNumbers.Clear();                        
            Random random = new Random();                   
            _number = random.Next(1, 101);                            
            _lastGuessedNumber = new GuessedNumber { Number = null, Outcome = Outcome.Indefinite };            
        }

        


        


        // Krav 9 och 10 Kontrollerar vad utkomsten av MakeGuess är
        public Outcome MakeGuess(int guess)
        {
            if(guess < 1 || guess > 100) //Krav 2. Om det skulle gå förbi klient valideringen så crashar det här om man gissar på mindre än 1 och högre än 100
            {
                throw new ArgumentOutOfRangeException();
            }           

            if (_guessedNumbers.Exists(m => m.Number == guess)) //krav 6. Om gissningen finns i listan GuessedNumber så får Outcome värdet OldGuess
            {
                _lastGuessedNumber.Outcome = Outcome.OldGuess;
            }
            else
            {

                if (!CanMakeGuess)
                {
                    _lastGuessedNumber.Outcome = Outcome.NoMoreGuesses;
                }
                else
                {
                    if (guess > _number)
                    {
                        _lastGuessedNumber.Outcome = Outcome.High;
                    }
                    if (guess < _number)
                    {
                        _lastGuessedNumber.Outcome = Outcome.Low;
                    }
                    if (guess == _number)
                    {
                        _lastGuessedNumber.Outcome = Outcome.Right;
                    }
                    _lastGuessedNumber.Number = guess;
                    if (CanMakeGuess)
                    {
                        _guessedNumbers.Add(_lastGuessedNumber);
                    }
                }

            }

            return _lastGuessedNumber.Outcome;
        }

        //Constructorn kallar på Metoden Initialize
        public SecretNumber()
        {
            _guessedNumbers = new List<GuessedNumber>(MaxNumberOfGuesses);
            Initialize();
        }



    }
}