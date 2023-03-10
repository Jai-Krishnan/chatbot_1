function getBotResponse(input) {
    //return/refund
    if (input=="Return") {
        return "Reason";    
    } 
    else if (input == "Product damaged") {
        return "Confirm the Return";
    }
    else if (input == "Confirm") {
        return "Your Order has been confirmed for return";
        }
 else if (input == "Refund") {
            return "Reason";
        }
    else if (input == "I didnt like the product") {
            return "Confirm the Refund";
    }
    else if (input == "confirm") {
        return "The refund will be generated after receiving the product ";
    }
    else if (input == "thank you") {
        return "thank you for  ";
    }
    

    
    // Simple responses
    if (input == "hello") {
        return "Hello, How can I help you";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}