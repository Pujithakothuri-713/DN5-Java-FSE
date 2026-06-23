public class TestLogger {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application Started");
        logger2.log("User logged in.");

        if(logger1 == logger2) {
            System.out.println("Both the Instances are Same");
        }
        else {
            System.out.println("Instances are Different");
        }
    }
}