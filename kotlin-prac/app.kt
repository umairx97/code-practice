fun main(args: Array<String>) {

    getName("Umair")
    printArray();

    val x:Int = 3
    when (x) {
        
        1 -> print("X is equal to 1"); 

        2 -> print("X is equal to 2");

        3,4 -> print("X is equal to 3")

        else -> { 
            print("x is neither 1 nor 2")
        }
    }


    
}


fun printArray(): IntArray { 
    val numbers: IntArray = intArrayOf(1, 2, 3, 4, 5)
    println("Hey!! I am array Example"+numbers[2])
    return numbers
}

fun getName(student: String): String { 
    var greeting: String = "Hello " + student  
    println(greeting)
    return greeting
}


