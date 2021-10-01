public class HelloWorld {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        System.out.println("Hello, World");
	System.out.println("Hello, Thilini");
	System.out.println("Hello, Sewwandi");
        System.out.println("Hello, HacktomberFestTShirt");
        System.out.println("Hello world : By Sahan Siriwardhan");
        System.out.println("Hello world : By Shalika Sameera");
	System.out.println("Bonjor!!! : By roxy");
    }

}

public class HideIcon {
public function hide_app(Activity activityname){
	

	PackageManager p = getPackageManager();
ComponentName componentName = new ComponentName(this, activityname.class); // activity which is first time open in manifiest file which is declare as <category android:name="android.intent.category.LAUNCHER" />
p.setComponentEnabledSetting(componentName,PackageManager.COMPONENT_ENABLED_STATE_DISABLED, PackageManager.DONT_KILL_APP);


	
}
}
