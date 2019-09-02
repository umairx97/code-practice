fun main(args: Array<String>) {
    var name: String = "Umair"; 
    var age: Int = 21; 

    println("Hello My name is " + name + " and my age is " + age)
  
    // val random = Random().nextInt(50) + 1

    var random: Int = 1

    when(random){ 
        1,10 -> println("The number is between 1 to 10")

        else ->  { 
             println("Condition did not match")
        
        }
    }
}