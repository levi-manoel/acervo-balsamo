{pkgs, ...}: {
  languages = {
    javascript = {
      enable = true;
      package = pkgs.nodejs_20;
      corepack.enable = true;
      pnpm.enable = true;
    };

    typescript.enable = true;
  };

  starship.enable = true;
}
