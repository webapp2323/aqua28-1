package loginviagoogle.services;

import loginviagoogle.dto.AccountDTO;
import loginviagoogle.model.Account;
import loginviagoogle.repos.AccountRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  private final AccountRepository accountRepository;

  public UserDetailsServiceImpl(AccountRepository accountRepository) {
    this.accountRepository = accountRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Account account = accountRepository.findByEmail(username);
    if (account == null) {
      throw new UsernameNotFoundException(username + " not found");
    }

    List<GrantedAuthority> roles = List.of(
        new SimpleGrantedAuthority(account.getRole().toString())
    );
    AccountDTO customUser = account.toDTO();
    return new User(customUser.getEmail(), customUser.getPassword(), roles);
  }
}
