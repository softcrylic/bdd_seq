package com.softcrylic.test.automation.pages;

import java.io.IOException;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;

public class DataTable {
	private SortedMap<String,String> items = new TreeMap<String, String>();

    public void addItem(String key, String value) {
        items.put(key, value);
    }
    
    public void print(Appendable out) throws IOException {
        for (Map.Entry<String, String> entry : items.entrySet()) {
            out.append(entry.getValue().toString()).append(" ").append(entry.getKey()).append("\n");
        }
    }
	
}
