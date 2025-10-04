# Importing GPG keys

You can only import one GPG key at a time. If you need to transfer more than one key, repeat the steps for each key.

## From GPG keyring

```
gpg --armor --gen-random 1 24 # generate a strong random password; use it in the next step
gpg --armor --export-secret-keys <ID of key used for pass> | gpg --armor --symmetric --output myKeyForPass.sec.asc
```

File `myKeyForPass.sec.asc` can be directly imported into Password Store; enter the password from the first step when asked for the backup code.

## From OpenKeychain

1. In the main app window, select the key that you use for pass/Password Store from the "My Keys" list.
2. In the window that appears, tap the three-dot menu in the top right corner and select "Backup key".
3. Write down the backup code, then save the backup file to your phone.
4. Import this backup file into Password Store by navigating to Settings → PGP Settings → Key Manager → +, and enter the backup code when prompted.

