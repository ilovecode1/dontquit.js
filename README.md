#Version Info

##1.0.1

Fixed Typo

##1.0.0

Release

# Simple Usage

```
window.onbeforeunload=dontquit.do;
```

#More Custom Usage

```
dontquit.defaultText = "Custom Text";
window.onbeforeunload=dontquit.do;
```

#Do More

```
var notsaved = true;
if (notsaved){
  dontquit.defaultText = "Hey your not saved yet!";
  window.onbeforeunload=dontquit.do;
}
else {
  
  dontquit.defaultText = "Double Check";
  window.onbeforeunload=dontquit.do;

}
```

#More

```
dontquit.Version
dontquit.Author
```
