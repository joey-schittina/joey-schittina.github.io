
const Calculator={
    result:0,
    operator:null,
    past:0,
    current:0,
  
    addDigit : function(num){
      this.current*=10;
      this.current+=num;
    },
  
    operation : function(op){
      this.operator=op;
      this.current=this.past;
      this.current=0;
    },
  
    enter : function(){
      this.result=this.past+this.current;
      this.current=this.result;
    },
  
    clear : function(){
      this.result=0;
      this.operator=null;
      this.past=0;
      this.current=0;
    },
  }

  document.getElementById("one").onclick=function(){
    Calculator.addDigit(1)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }

  document.getElementById("two").onclick=function(){
    Calculator.addDigit(2)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }

  document.getElementById("three").onclick=function(){
    Calculator.addDigit(3)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }

  document.getElementById("four").onclick=function(){
    Calculator.addDigit(4)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("five").onclick=function(){
    Calculator.addDigit(5)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("six").onclick=function(){
    Calculator.addDigit(6)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("seven").onclick=function(){
    Calculator.addDigit(7)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("eight").onclick=function(){
    Calculator.addDigit(8)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("nine").onclick=function(){
    Calculator.addDigit(9)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("zed").onclick=function(){
    Calculator.addDigit(0)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }
  document.getElementById("clear").onclick=function(){
    Calculator.clear()
    document.getElementById("resb").innerHTML= Calculator.current.toString()
  }

document.getElementById("plus").onclick=function(){
    Calculator.operation(plus)
    document.getElementById("resb").innerHTML= Calculator.current.toString()
}
  