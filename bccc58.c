#include <string.h>
#include  <stdlib.h>
#include <inttypes.h>

/*
 * Reddit r/badcode Bad Code Coding Challenge #58 submission.
 * Copyright (c) 2021, tan2pow16. All rights reserved.
 */

int main(int argc, char *argv[])
{
  char *line0;
  char *line1;
  char *cache;
  size_t leng;
  uint8_t idx;
  ssize_t len;
  leng = 0x13;

  line0 = malloc(0x14);
  line1 = malloc(0x14);
  while((len = getline(&line1, &leng, stdin)) >= 0)
  {
    if(line0)
      for(idx = 0 ; (len > 1) && (idx < len) && (line1[idx] <= line0[idx]) ; idx++)
        if(line0[idx] - line1[idx])
          return !!(fprintf(stdout, "false\n") - 6);
            // Why parsing and formatting strings when you don't have to? c:

    strcpy(line0, line1);
  }

  return !!(fprintf(stdout, "true\n") - 5);
}
