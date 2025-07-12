npm i -g @angular/cli
cd day6
ng new steps --create-application=false --ssr=false --standalone=flase              for   enivroment file          -----1
                                        or
ng new steps <filename> --create-application=false --ssr=false --standalone=flase   for project                    -----3

cd steps                                                                                                           -----2                                           
ng generate  application step2-binding --style=css --routing=false --ssr=false --standalone=false -s -t -s         -----4
ng generate  application step1-communication --style=css --routing=false --ssr=false --standalone=false -s -t -s   -----5

ng generate  application step2-binding 
--style=css 
--routing=false 
--ssr=false 
--standalone=false 
--inlineStyle -s do not generate external css file
--inlineTemplate -t do not generate external html file 
--skipTests -s do not generate test files



ng g c <component Name> --flat -s -t --skip-tests to create direct components
ng g c <component Name> --project=<project Name> --flat -s -t --skip-tests  to crate  comp in second 

ng g c <component Name> --dry --run

 ng g class <class Name> --project=step1-pipes   --skip-tests  creating class
  ng g p  <pipe Name> --project=step1-pipes   --skip-tests  creating pipe
 ng g s registration --project=step2-forms   --skip-tests    creating service

ng serve  --open
ng serve  --port 2334

want to run secondproject is 
ng serve step2-binding




ng app is contast
ng is angular cli 
