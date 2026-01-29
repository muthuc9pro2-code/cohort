function inAnagram(str1, str2) {
     sortedstr1 = str1.toLowerCase().split("").sort().join("");
     sortedstr2 = str2.toLowerCase().split("").sort().join("");

    if (sortedstr1 == sortedstr2) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

inAnagram("MUThukumar", "all the best"); 

















     