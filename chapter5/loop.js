function loop(value, test, update, log) {
    if(test(value)) {
        log(value);
        return loop(update(value), test, update, log)
    }
}
  
loop(3, n => n > 0, n => n - 1, console.log);