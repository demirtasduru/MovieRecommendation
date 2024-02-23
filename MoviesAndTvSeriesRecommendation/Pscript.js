const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="size"]');
        btn.addEventListener("click", () => {
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
            if(selectedSize=="Drama")
            {
              output.innerText="The Girl On the Train";
            }
            else if(selectedSize=="Thriller")
            {
              output.innerText="The Girl with the Dragon Tattoo or Shutter Island"
            }
            else if(selectedSize=="Fantasy")
            {
              output.innerText="The Call";
            }
            else
            output.innerText="You didn't choose anything";

        });
    